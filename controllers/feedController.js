const feedService = require('../services/feedService');


const getFeed = async (req, res, next) => {
    try {
        const { searchTerm, sortBy, sortOrder, page, limit } = req.body;
       // console.log(searchTerm, sortBy, sortOrder, page, limit);
        
        const result = await feedService.getFeed(searchTerm, sortBy, sortOrder, page, limit);
    
        res.status(200).json(result);
      } catch (error) {
        next(error);
      }
  
  };

  module.exports={getFeed}