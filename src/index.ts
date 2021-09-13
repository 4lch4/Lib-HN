import Axios, { AxiosInstance } from 'axios'
import { APIResponse, HNItem, HNUpdate } from './interfaces'

export class LibHN {
  private client: AxiosInstance
  // private baseUrl: string

  constructor(baseUrl: string = 'https://hacker-news.firebaseio.com/v0') {
    this.client = Axios.create({
      baseURL: baseUrl
    })
    // this.config = config
  }

  public async getTopStoryIds(): Promise<APIResponse<number[]>> {
    try {
      const res = await this.client.get('/topstories.json')

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
      const res = await this.getTopStoryIds()
      const items: HNItem[] = []

      for (const id of res.data) {
        if (items.length < count) {
          const item = await this.getItem(id)
          items.push(item.data)
        }
      }

      return {
        data: items,
        code: res.code,
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
      const res = await this.client.get(`/newstories.json`)
      const items: HNItem[] = []

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
      const res = await this.client.get(`/beststories.json`)
      const items: HNItem[] = []

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
      const res = await this.client.get(`/askstories.json`)
      const items: HNItem[] = []

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
      const res = await this.client.get(`/showstories.json`)
      const items: HNItem[] = []

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
      const res = await this.client.get(`/jobstories.json`)
      const items: HNItem[] = []

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
      const res = await this.client.get(`/item/${id}.json`)

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
      const res = await this.client.get(`/updates`)

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

export * from './interfaces'
