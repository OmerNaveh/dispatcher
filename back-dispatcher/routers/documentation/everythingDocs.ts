/**
 * @api {post} /everything Request Everything news from DB
 * @apiName Get Everything from DB
 * @apiGroup Everything
 *
 * @apiParam {Number} pageSize Amount of articles returned from each request - defaults to 20.
 * @apiParam {Number} page Pagination of articles- based on pageSize- defaults to 1.
 * @apiParam {String} language Desired 2 letter combination of language from which the articles are written in.
 * @apiParam {String} q Query to filter desired articles.
 * @apiParam {String} from Find articles from a specific date.
 * @apiParam {String} sources Select from specific source.
 * @apiParam {String=publishedAt,relevancy,popularity} sortBy Filter articles based on 3 possible parameters.
 *
 * @apiExample Example usage:
 *     endpoint: https://dispatcher-omer.herokuapp.com/everything/
 *
 *     body:
 *     {
 *       "data":{
 *          "page":2,
 *          "pageSize":100,
 *          "q":"bitcoin"
 *        }
 *     }
 *
 * @apiSuccess {String} status request status.
 * @apiSuccess {Number} totalResults total results from given data in DB.
 * @apiSuccess {Array} articles Array containing all articles.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
 *  "status": "ok",
 *  "totalResults": 139,
 *  "articles": [
 *     {
 *           "source": {
 *               "id": "marca",
 *               "name": "Marca"
 *           },
 *           "_id": "625c632cac4667738278aa99",
 *           "title": "Lossless crypto: Is it faring better than bitcoin?",
 *           "__v": 0,
 *           "author": "LW",
 *           "content": "After posting a year of huge gains, cryptocurrencies like bitcoin and Ether kicked off 2022. However, some altcoins are bucking that trend in the cryptocurrency world.\r\nBetter returns at lower risk\r\n… [+1486 chars]",
 *           "description": "After posting a year of huge gains, cryptocurrencies like bitcoin and Ether kicked off 2022. However, some altcoins are bucking that trend in the cryptocurrency world.\n\nBetter retu",
 *           "popularity": 0,
 *           "publishedAt": "2022-04-17T17:20:27Z",
 *           "tags": [
 *               "Money",
 *               "Tech"
 *           ],
 *           "url": "https://www.marca.com/en/lifestyle/world-news/2022/04/17/625c4c47268e3eec268b45a2.html",
 *           "urlToImage": "https://phantom-marca.unidadeditorial.es/bbbd2f21a108986d6468c6a52c8e4c67/resize/1200/f/jpg/assets/multimedia/imagenes/2022/04/17/16502154776836.jpg"
 *       }
 *    ]
 *  }
 *
 * @apiError InternalErrors DB Communication Errors.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Errors
 *     {
 *       "error": "Internal Server Errors"
 *     }
 */

/**
 * @api {post} /everything/gateway Request Everything news from NewsAPI
 * @apiName Get Everything from NewsAPI
 * @apiGroup Everything
 *
 * @apiParam {Number} pageSize Amount of articles returned from each request - defaults to 20.
 * @apiParam {Number} page Pagination of articles- based on pageSize- defaults to 1.
 * @apiParam {String} language Desired 2 letter combination of language from which the articles are written in.
 * @apiParam {String} q Query to filter desired articles.
 * @apiParam {String} from Find articles from a specific date.
 * @apiParam {String} sources Select from specific source.
 * @apiParam {String=publishedAt,relevancy,popularity} sortBy Filter articles based on 3 possible parameters.
 *
 * @apiExample Example usage:
 *     endpoint: https://dispatcher-omer.herokuapp.com/everything/gateway
 *
 *     body:
 *     {
 *       "data":{
 *          "page":2,
 *          "pageSize":50,
 *          "q":"bitcoin"
 *        }
 *     }
 *
 * @apiSuccess {String} status request status.
 * @apiSuccess {Number} totalResults total results from given data in DB.
 * @apiSuccess {Array} articles Array containing all articles.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
 *  "status": "ok",
 *  "totalResults": 139,
 *  "articles": [
 *     {
 *           "source": {
 *               "id": "marca",
 *               "name": "Marca"
 *           },
 *           "_id": "625c632cac4667738278aa99",
 *           "title": "Lossless crypto: Is it faring better than bitcoin?",
 *           "__v": 0,
 *           "author": "LW",
 *           "content": "After posting a year of huge gains, cryptocurrencies like bitcoin and Ether kicked off 2022. However, some altcoins are bucking that trend in the cryptocurrency world.\r\nBetter returns at lower risk\r\n… [+1486 chars]",
 *           "description": "After posting a year of huge gains, cryptocurrencies like bitcoin and Ether kicked off 2022. However, some altcoins are bucking that trend in the cryptocurrency world.\n\nBetter retu",
 *           "publishedAt": "2022-04-17T17:20:27Z",
 *           "url": "https://www.marca.com/en/lifestyle/world-news/2022/04/17/625c4c47268e3eec268b45a2.html",
 *           "urlToImage": "https://phantom-marca.unidadeditorial.es/bbbd2f21a108986d6468c6a52c8e4c67/resize/1200/f/jpg/assets/multimedia/imagenes/2022/04/17/16502154776836.jpg"
 *       }
 *    ]
 *  }
 *
 * @apiError TooManyRequests Too Many Requests.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 429 Too Many Requests
 *     {
 *       "error": "Too Many Requests"
 *     }
 */
