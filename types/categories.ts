type ColorSet = "green" | "pink" | "purple" | "blue";

interface ICategory {
  id: string;
  name: string;
  colorSet: ColorSet;
}

export default ICategory;