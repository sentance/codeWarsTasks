function domainName(url){
    //your code here
    const pattern = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/
    return url.replace(/.+\/\/|www.|\..+/g, '')

  }
  console.log(domainName("http://www.zombie-bites.com"))