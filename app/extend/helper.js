module.exports = {
    calcLimitAndOffset(pageIndex = 1, pageSize = 20) {
        pageIndex = Number(pageIndex || 1);
        pageSize = Number(pageSize || 20);
        return {
            limit: pageSize,
            offset: (pageIndex - 1) * pageSize
        };
    },
}