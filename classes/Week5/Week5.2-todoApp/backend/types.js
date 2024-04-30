const zod = require("zod");

const createTodoSchema = zod.object({
    title: zod.string().min(1),
    description: zod.string().min(1),
});

const updateTodoSchema = zod.object({
    id: zod.string().min(1),
});

module.exports = {
    createTodoSchema,
    updateTodoSchema,
};
