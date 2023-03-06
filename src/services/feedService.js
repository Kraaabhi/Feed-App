const { Op } = require("sequelize");
const FeedItem = require("../models/feedItems");

exports.getFeed = async (
  searchTerm,
  sortBy,
  sortOrder,
  pageNumber,
  pageSize
) => {
  // Define the WHERE clause for the query
  const where = {};

  // If the search term is enclosed in double quotes, search for an exact phrase
  if (searchTerm.startsWith('"') && searchTerm.endsWith('"')) {
    const phrase = searchTerm.slice(1, -1);
    where[Op.or] = [
      { name: { [Op.iLike]: `%${phrase}%` } },
      { description: { [Op.iLike]: `%${phrase}%` } },
    ];
  } else {
    // Otherwise, perform a loose search for each term in the search string
    const terms = searchTerm.split(/\s+/);
    const clauses = terms.map((term) => ({
      [Op.or]: [
        { name: { [Op.iLike]: `%${term}%` } },
        { description: { [Op.iLike]: `%${term}%` } },
      ],
    }));
    where[Op.and] = clauses;
  }

  // Define the ORDER BY clause for the query
  const order = [];
  if (sortBy) {
    order.push([sortBy, sortOrder === "desc" ? "DESC" : "ASC"]);
  }

  // Define the LIMIT and OFFSET clauses for the query

  const limit = parseInt(pageSize) || 10;
  const offset = (parseInt(pageNumber) - 1) * limit;

  // Execute the query and return the results
  const { count, rows } = await FeedItem.findAndCountAll({
    where,
    order,
    limit,
    offset,
  });

  return {
    total: count,
    page: pageNumber,
    feed: rows,
  };
};
