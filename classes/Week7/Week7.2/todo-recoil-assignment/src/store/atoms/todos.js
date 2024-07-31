import { atom, selector } from "recoil";

export const todoAtom = atom({
    key: "todoAtom",
    default: [],
});

export const filterTextAtom = atom({
    key: "filterTextAtom",
    default: "",
});

export const filterTodosSelector = selector({
    key: "filteredTodosSelector",
    get: ({ get }) => {
        if (get(filterTextAtom) === "") return get(todoAtom);
        return get(todoAtom).filter(
            (todo) =>
                todo.title.includes(get(filterTextAtom)) ||
                todo.description.includes(get(filterTextAtom))
        );
    },
});
