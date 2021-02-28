export class AbstractDataSource {

  protected baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public request = async (url: string, init?: RequestInit): Promise<Response> => {
    const response = await fetch(url, init);

    if (response.status !== 200) {
      const data = await response.json();

      throw data.response;
    }

    return await response.json();
  };

}
