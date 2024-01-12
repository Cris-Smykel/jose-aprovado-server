function transformKeys(rows) {
  return rows.map((row) => {
    const transformedRow = {};
    for (const key in row) {
      // Convert snake_case to camelCase
      const camelCaseKey = key.replace(/_([a-z])/g, (match, p1) =>
        p1.toUpperCase()
      );
      transformedRow[camelCaseKey] = row[key];
    }
    return transformedRow;
  });
}

module.exports = { transformKeys };
