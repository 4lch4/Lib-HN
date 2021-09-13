import Axios, { AxiosInstance } from 'axios'
import { APIResponse, Config, HNItem, HNUpdate } from './interfaces'

const DefaultConfig: Config = {
  baseUrl: 'https://hacker-news.firebaseio.com/v0',
  version: 'v0'
}

export class LibHN {
  private client: AxiosInstance
  private config: Config

  constructor(config: Config = DefaultConfig) {
    this.client = Axios.create()
    this.config = config
  }

  public async getTopStoryIds(): Promise<APIResponse<number[]>> {
    try {
      const res = await this.client.get(
        `${this.config.baseUrl}/topstories.json`
      )

      return {
        data: res.data,
        code: res.status,
        headers: res.headers,
        statusText: res.statusText
      }
    } catch (err) {
      throw err
    }
  }

  /**
   * Queries the HN API for the list of Top Stories and returns them as an
   * array.
   *
   * @param count How many items to return (default: 10; max: 500)
   * @returns The Hacker News Top Stories as an array.
   */
  public async getTopStories(
    count: number = 10
  ): Promise<APIResponse<HNItem[]>> {
    try {
      const items: HNItem[] = []
      const res = await this.client.get(
        `${this.config.baseUrl}/topstories.json`
      )

      for (const id of res.data) {
        if (items.length < count) {
          const item = await this.getItem(id)
          items.push(item.data)
        }
      }

      return {
        data: items,
        code: res.status,
        headers: res.headers,
        statusText: res.statusText
      }
    } catch (err) {
      throw err
    }
  }

  /**
   * Queries the HN API for the list of top New Stories and returns them as an
   * array.
   *
   * @param count How many items to return (default: 10; max: 500)
   * @returns The Hacker News New Stories as an array.
   */
  public async getNewStories(
    count: number = 10
  ): Promise<APIResponse<HNItem[]>> {
    try {
      const items: HNItem[] = []
      const res = await this.client.get(
        `${this.config.baseUrl}/newstories.json`
      )

      for (const id of res.data) {
        if (items.length < count) {
          const item = await this.getItem(id)
          items.push(item.data)
        }
      }

      return {
        data: items,
        code: res.status,
        headers: res.headers,
        statusText: res.statusText
      }
    } catch (err) {
      throw err
    }
  }

  /**
   * Queries the HN API for the list of Best Stories and returns them as an
   * array.
   *
   * @param count How many items to return (default: 10; max: 500)
   * @returns The Hacker News Best Stories as an array.
   */
  public async getBestStories(
    count: number = 10
  ): Promise<APIResponse<HNItem[]>> {
    try {
      const items: HNItem[] = []
      const res = await this.client.get(
        `${this.config.baseUrl}/beststories.json`
      )

      for (const id of res.data) {
        if (items.length < count) {
          const item = await this.getItem(id)
          items.push(item.data)
        }
      }

      return {
        data: items,
        code: res.status,
        headers: res.headers,
        statusText: res.statusText
      }
    } catch (err) {
      throw err
    }
  }

  /**
   * Queries the HN API for the list of top Ask Stories and returns them as an
   * array.
   *
   * @param count How many items to return (default: 10; max: 200)
   * @returns The Hacker News Ask Stories as an array.
   */
  public async getAskStories(
    count: number = 10
  ): Promise<APIResponse<HNItem[]>> {
    try {
      const items: HNItem[] = []
      const res = await this.client.get(
        `${this.config.baseUrl}/askstories.json`
      )

      for (const id of res.data) {
        if (items.length < count) {
          const item = await this.getItem(id)
          items.push(item.data)
        }
      }

      return {
        data: items,
        code: res.status,
        headers: res.headers,
        statusText: res.statusText
      }
    } catch (err) {
      throw err
    }
  }

  /**
   * Queries the HN API for the list of top Show Stories and returns them as an
   * array.
   *
   * @param count How many items to return (default: 10; max: 200)
   * @returns The Hacker News Show Stories as an array.
   */
  public async getShowStories(
    count: number = 10
  ): Promise<APIResponse<HNItem[]>> {
    try {
      const items: HNItem[] = []
      const res = await this.client.get(
        `${this.config.baseUrl}/showstories.json`
      )

      for (const id of res.data) {
        if (items.length < count) {
          const item = await this.getItem(id)
          items.push(item.data)
        }
      }

      return {
        data: items,
        code: res.status,
        headers: res.headers,
        statusText: res.statusText
      }
    } catch (err) {
      throw err
    }
  }

  /**
   * Queries the HN API for the list of top Job Stories and returns them as an
   * array.
   *
   * @param count How many items to return (default: 10; max: 200)
   * @returns The Hacker News Job Stories as an array.
   */
  public async getJobStories(
    count: number = 10
  ): Promise<APIResponse<HNItem[]>> {
    try {
      const items: HNItem[] = []
      const res = await this.client.get(
        `${this.config.baseUrl}/jobstories.json`
      )

      for (const id of res.data) {
        if (items.length < count) {
          const item = await this.getItem(id)
          items.push(item.data)
        }
      }

      return {
        data: items,
        code: res.status,
        headers: res.headers,
        statusText: res.statusText
      }
    } catch (err) {
      throw err
    }
  }

  /**
   * Attempts to get the item with the given ID from the Hacker News API.
   *
   * @param id The unique id of the item to retrieve.
   * @returns The Hacker News item with the given id.
   */
  public async getItem(id: number): Promise<APIResponse<HNItem>> {
    try {
      const res = await this.client.get(
        `${this.config.baseUrl}/item/${id}.json`
      )

      return {
        data: res.data,
        code: res.status,
        headers: res.headers,
        statusText: res.statusText
      }
    } catch (err) {
      throw err
    }
  }

  /**
   * Queries the HN API for the list of updates and
   */
  public async getUpdates(): Promise<APIResponse<HNUpdate>> {
    try {
      const res = await this.client.get(`${this.config.baseUrl}/updates`)

      return {
        data: res.data,
        code: res.status,
        headers: res.headers,
        statusText: res.statusText
      }
    } catch (err) {
      throw err
    }
  }
}

const tmpClass = new LibHN()

tmpClass
  .getUpdates()
  .then(res => {
    console.log('Res received...')

    console.log(`res.data.items.length = ${res.data.items.length} `)
    console.log(res.data)
    // const story = res.data[0]
    // if (story.time) {
    //   const tmpDate = new Date(story.time * 1000)
    //   // console.log(new Date())
    //   console.log(`tmpDate = ${tmpDate.toString()}`)
    // }
    // console.log(story)

    console.log('Done!')
  })
  .catch(err => console.log(err))
