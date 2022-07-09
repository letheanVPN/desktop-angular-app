import {Component, OnDestroy, OnInit} from '@angular/core';
import {NotificationService, NotificationStyleType, NotificationType} from '@swimlane/ngx-ui';
import {interval, Subscription} from 'rxjs';

@Component({
	selector: 'lthn-app-docker',
	templateUrl: './docker.component.html',
	styleUrls: ['./docker.component.scss']
})
export class DockerComponent implements OnInit, OnDestroy {

	public containers = [];
	private sub: Subscription;

	constructor(private notificationService: NotificationService) {
	}

	async ngOnInit() {
		this.containers = await this.getContainerList();
		this.sub = interval(50000).subscribe(async () => {
			this.containers = await this.getContainerList();

		});

	}

	/**
	 * Gets Docker containers
	 *
	 * @returns {Promise<any[]>}
	 */
	async getContainerList() {
		try {
			const containers = await fetch('http://localhost:36911/docker/containers', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			this.containers = await containers.json();
		} catch (e) {
			this.containers = [];
		}

		return this.containers;
	}

	/**
	 * Starts a Docker container by it's ID
	 *
	 * @param {string} containerId
	 * @returns {Promise<boolean>}
	 */
	async startContainer(containerId: string) {

		try {
			await fetch('http://localhost:36911/docker/containers/start', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({id: containerId})
			});
		}catch (e) {
			this.notificationService.create({
				type: NotificationType.html,
				styleType: NotificationStyleType.error,
				title: 'FAILED: Start Container',
				body: containerId
			});
			return false;
		}

		this.notificationService.create({
			type: NotificationType.html,
			styleType: NotificationStyleType.success,
			title: 'Start Requested!',
			body: containerId
		});
		await this.getContainerList();
	}

	/**
	 * Stop a Docker Container by its ID
	 *
	 * @param {string} containerId
	 * @returns {Promise<boolean>}
	 */
	async stopContainer(containerId: string) {

		try{
			const containers = await fetch('http://localhost:36911/docker/containers/stop', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({id: containerId})
			});
			//this.containers = await containers.json()
			await containers.json();
		}catch (e) {
			this.notificationService.create({
				type: NotificationType.html,
				styleType: NotificationStyleType.error,
				title: 'FAILED: Stop Container',
				body: containerId
			});
			return false
		}

		this.notificationService.create({
			type: NotificationType.html,
			styleType: NotificationStyleType.success,
			title: 'Stop Requested!',
			body: containerId
		});
		await this.getContainerList();
	}

	/**
	 * Restart a Docker Container by its ID
	 * @param {string} containerId
	 * @returns {Promise<boolean>}
	 */
	async restartContainer(containerId: string) {

		try{
			const containers = await fetch('http://localhost:36911/docker/containers/stop', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({id: containerId})
			});

			await containers.json();
		}catch (e) {
			this.notificationService.create({
				type: NotificationType.html,
				styleType: NotificationStyleType.error,
				title: 'FAILED: Restart Container',
				body: containerId
			});
			return false
		}

		this.notificationService.create({
			type: NotificationType.html,
			styleType: NotificationStyleType.success,
			title: 'Restart Requested!',
			body: containerId
		});
		await this.getContainerList();
	}

	/**
	 * Create Lethean Chain Container
	 *
	 * @returns {Promise<void>}
	 */
	async createChainDaemon() {
		const containers = await fetch('http://localhost:36911/docker/containers/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: 'lthn_chain', container: {
					'Image': 'lthn/chain:latest',
					'HostConfig': {
						NetworkMode: 'host'
					},
					'ExposedPorts': {
						'48772/tcp': {},
						'48782/tcp': {}
					}
				}
			})
		});
		//this.containers = await containers.json()
		console.log(await containers.json());
		this.notificationService.create({
			type: NotificationType.html,
			styleType: NotificationStyleType.success,
			title: 'Container Create Requested!',
			body: ''
		});
		await this.getContainerList();
	}

	public ngOnDestroy(): void {
		if (this.sub) this.sub.unsubscribe();
	}


	async removeContainer(containerId) {

		const containers = await fetch('http://localhost:36911/docker/containers/delete', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({id: containerId})
		});
		//this.containers = await containers.json()
		console.log(await containers.json());
		this.notificationService.create({
			type: NotificationType.html,
			styleType: NotificationStyleType.success,
			title: 'Restart Requested!',
			body: containerId
		});
		await this.getContainerList();
	}


}
