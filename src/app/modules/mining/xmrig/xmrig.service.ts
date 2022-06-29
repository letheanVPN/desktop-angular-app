import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class XmrigService {

  constructor() { }

  async checkInstallConfig() {
    try{
      const containers = await fetch('http://localhost:36911/system/data/object/get', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({group:"apps", object:"xmrig"})
      })
      return await containers.json()
    }catch (e) {
      return false
    }

  }

  async setInstallConfig(config: any) {
    const containers = await fetch('http://localhost:36911/system/data/object/set', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({group:"apps", object:"xmrig", data:config})
    })
    return await containers.json()
  }

  async fetchRelease() {
    const containers = await fetch('http://localhost:36911/mining/xmrig/downloads', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })

    return  await containers.json()

  }

  async downloadXmrig(id: string) {
    const containers = await fetch('http://localhost:36911/mining/xmrig/download', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id: id})
    })
    //this.containers = await containers.json()
    return await containers.json()
  }

  async startXmrig() {
    const containers = await fetch('http://localhost:36911/mining/xmrig/start', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: 'pool.hashvault.pro', user: 'iz5Tcjds8Fi2xD32PotNJ4b23H3w9pxap7haK27asKZHTVQWYp6Cesb7cmCsc7XywPeVoCjN7kxm28X45vMLEMTB2YaSDPzbs'})
    })
    //this.containers = await containers.json()
    return await containers.json()
  }
}
