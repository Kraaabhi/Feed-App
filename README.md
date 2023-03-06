# Feed-App
Implementing search and sort of a feed, with pagination. 


Features:



    => Searches in fields name and description.
    => Supports exact match when the query contains a phrase within double quotes.
    => Allows sorting by name and dateLastEdited.
    => Uses 'page numbers' style of pagination.
    => Included total count in the response matching the current query result.


Getting Started:



    1.Clone this repository
    2. Install dependencies using "npm install" command
    3. Create a config.env file in the src/config directory and add the following configuration variables:
         DATABASE_URL=postgres://<db_username>:<db_password>@<db_host>:<db_port>/<db_name>
         PORT=<server_port>
    4. seed the data using  "node scripts/seed.js" command
    5. Start the server: using  "npm start" command
    6. For testing run command "npx jest"
    
    
    
API Endpoints
    
    
    
    
GET /api/feed
This endpoint is used to retrieve feeds based on various search parameters. The following query parameters are supported:




            searchTerm (optional): The search term to be used to search for feeds in the name and description fields. If no search term is provided, all                                    feeds are returned.
            sortBy (optional): The field to sort the results by. Supported values are name and dateLastEdited. If no value is provided, the results are                                  sorted by name.
            sortOrder (optional): The order to sort the results by. Supported values are asc and desc. If no value is provided, the results are sorted in                                   ascending order.
            page (optional): The page number to retrieve. If no value is provided, the default value is 1.
            limit (optional): The maximum number of items to return per page. If no value is provided, the default value is 10.

Curl 



          curl --location 'http://localhost:3000/api/feed/?searchTerm=The King&page=1&limit=2&sortOrder=desc&sortBy=dateLastEdited'
