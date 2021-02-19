export class AbstractDataSource {

  public request = async (url: string, init?: RequestInit): Promise<Response> => {
    const response = await fetch(url, init);

    if (response.status !== 200) {
      const data = await response.json();

      throw data.response;
    }

    return await response.json();
  };

}
