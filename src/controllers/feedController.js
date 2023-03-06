const feedService = require("../services/feedService");

const getFeed = async (req, res, next) => {
  try {

    let {
      searchTerm = "",
      sortBy = "name",
      sortOrder = "asc",
      page = 1,
      limit = 10,
    } = req.query || {};
    if (!["name", "dateLastEdited"].includes(sortBy)) {
      sortBy = "name";
    }
    if (!["desc", "asc"].includes(sortOrder)) {
      sortOrder = "asc";
    }
    if (isNaN(page) || page < 1) {
      page = 1;
    }
    if (isNaN(limit) || limit < 1) {
      limit = 10;
    }

    const result = await feedService.getFeed(
      searchTerm,
      sortBy,
      sortOrder,
      page,
      limit
    );
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { getFeed };
