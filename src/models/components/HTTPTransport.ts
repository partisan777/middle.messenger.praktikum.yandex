const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
  };
  


  type optionsType = {
    path?: string
    timeout?: number,
    data?: string,
    [key: string]: unknown;
  };


  function queryStringify(data: object) {
    if (typeof data !== 'object') {
      throw new Error('Data must be object');
    }
  
    const keys = Object.keys(data);
   
      return keys.reduce((result: string, key: string, index: number) => {
        return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
      }, '?');
  }
  
  
  export default class HTTPTransport {
    public static get = (options: optionsType = {}) => {
  
      return this.request(url, {...options, method: METHODS.GET}, options.timeout);
    };
  
    public static post = (url, options = {}) => {
      return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    };
    
    public static put = (url, options = {}) => {
      return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };
    
    public static delete = (url, options = {}) => { 
      return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    };
    
    private static _request = (url: string, options: optionsType) => {
        const {path,
                method = METHODS.GET,
                data,
                timeout = 3000} = options;
  
      return new Promise((resolve, reject) => {
          if (!method) {
            reject('No method');
            return;
          }
  
        const xhr = new XMLHttpRequest();
        const isGet = method === METHODS.GET;
    
        xhr.open(
          method, 
          isGet && !!data
          ? `${url}${queryStringify(data)}`
          : url,
        );
    
        Object.keys(headers).forEach(key => {
          xhr.setRequestHeader(key, headers[key]);
        });
    
        xhr.onload = function() {
            resolve(xhr);
        };
    
        xhr.onabort = reject;
        xhr.onerror = reject;
    
        xhr.timeout = timeout;
        xhr.ontimeout = reject;
    
        if (isGet || !data) {
          xhr.send();
        } else {
          xhr.send(data);
        }
      });
  };
};


