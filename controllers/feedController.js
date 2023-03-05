const getFeed = async (req, res, next) => {
     return res.status(200).json({
        success:true,
        message:"response from controller"
     });
  
  };

  module.exports={getFeed}