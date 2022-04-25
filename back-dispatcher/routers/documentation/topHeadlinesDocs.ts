/**
 * @api {post} /top Request Top Headlines from DB
 * @apiName GetTopHeadlines
 * @apiGroup TopHeadlines
 *
 * @apiParam {Number} pageSize Amount of articles returned from each request - defaults to 20.
 * @apiParam {Number} page Pagination of articles- based on pageSize- defaults to 1.
 * @apiParam {String} country Desired 2 letter combination of country from which the articles are from.
 * @apiParam {String} q Query to filter desired articles.
 * @apiParam {String=business,entertainment,general,health,science,sports,technology} category Select from 7 different possible categories.
 * @apiParam {String} sources Select from specific source.
 *
 * @apiExample Example usage:
 *     endpoint: https://dispatcher-omer.herokuapp.com/top/
 *
 *     body:
 *     {
 *       "data":{
 *          "page":2,
 *          "pageSize":100,
 *          "country":"il"
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
 *      {
 *          "source": {
 *              "id": null,
 *              "name": "Themarker.com"
 *          },
 *          "_id": "6265086910f472239b9b6152",
 *          "title": "נומורה: ארה\"ב בדרך לאחד ממחזורי העלאת הריבית המהירים מעולם - TheMarker",
 *          "__v": 0,
 *          "author": "בלומברג",
 *          "category": "business",
 *          "content": "\" -0.75% , 0.5% . , \": 2%.\r\n\" \" \", , , -. \" (FOMC) , , -\".\r\n...\r\n<ol><li></li></ol><ol><li></li></ol><ol></ol>",
 *          "country": "il",
 *          "description": "כלכלני הבנק היפני צופים כי הבנק הפדרלי יעלה את הריבית ב-0.75% הן בפגישתו ביוני והן בפגישתו ביולי, לאחר העלאה צפויה של 0.5% בפגישתו במאי ■ \"הפד רוצה להימנע מספירלת שכר-מחירים\"",
 *          "publishedAt": "2022-04-22T15:25:00Z",
 *          "tags": [
 *              "Money"
 *          ],
 *          "url": "https://www.themarker.com/wallstreet/.premium-1.10756850",
 *          "urlToImage": "https://www.themarker.com/polopoly_fs/1.10756858.1650642891!/image/3265884352.jpg_gen/derivatives/headline_1200x630/3265884352.jpg"
 *      }
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
 * @api {post} /top/gateway Request Top Headlines from NewsAPI
 * @apiName Get TopHeadlines From NewAPI
 * @apiGroup TopHeadlines
 *
 * @apiParam {Number} pageSize Amount of articles returned from each request - defaults to 20 *Maximum 99*.
 * @apiParam {Number} page Pagination of articles- based on pageSize- defaults to 1.
 * @apiParam {String} country Desired 2 letter combination of country from which the articles are from.
 * @apiParam {String} q Query to filter desired articles.
 * @apiParam {String=business,entertainment,general,health,science,sports,technology} category Select from 7 different possible categories.
 * @apiParam {String} sources Select from specific source.
 *
 * @apiExample Example usage:
 *     endpoint: https://dispatcher-omer.herokuapp.com/top/gateway
 *
 *     body:
 *     {
 *       "data":{
 *          "page":2,
 *          "pageSize":50,
 *          "country":"il"
 *        }
 *     }
 *
 * @apiSuccess {String} status request status.
 * @apiSuccess {Number} totalResults total results from given data.
 * @apiSuccess {Array} articles Array containing all articles.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
 *  "status": "ok",
 *  "totalResults": 139,
 *  "articles": [
 *      {
 *          "source": {
 *              "id": null,
 *              "name": "Themarker.com"
 *          },
 *          "_id": "6265086910f472239b9b6152",
 *          "title": "נומורה: ארה\"ב בדרך לאחד ממחזורי העלאת הריבית המהירים מעולם - TheMarker",
 *          "__v": 0,
 *          "author": "בלומברג",
 *          "content": "\" -0.75% , 0.5% . , \": 2%.\r\n\" \" \", , , -. \" (FOMC) , , -\".\r\n...\r\n<ol><li></li></ol><ol><li></li></ol><ol></ol>",
 *          "description": "כלכלני הבנק היפני צופים כי הבנק הפדרלי יעלה את הריבית ב-0.75% הן בפגישתו ביוני והן בפגישתו ביולי, לאחר העלאה צפויה של 0.5% בפגישתו במאי ■ \"הפד רוצה להימנע מספירלת שכר-מחירים\"",
 *          "publishedAt": "2022-04-22T15:25:00Z",
 *          "url": "https://www.themarker.com/wallstreet/.premium-1.10756850",
 *          "urlToImage": "https://www.themarker.com/polopoly_fs/1.10756858.1650642891!/image/3265884352.jpg_gen/derivatives/headline_1200x630/3265884352.jpg"
 *      }
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
