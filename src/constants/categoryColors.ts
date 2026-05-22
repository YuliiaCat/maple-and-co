export const categoryColors = {
  green: {
    backgroundColor: "#DDE6C5",
    borderColor: "#C8D7A6",
    textColor: "#5A673A",
  },

  pink: {
    backgroundColor: "#F8DDE8",
    borderColor: "#E8B8CB",
    textColor: "#8A3F5C",
  },

  purple: {
    backgroundColor: "#E8DDF8",
    borderColor: "#CDB8EA",
    textColor: "#5E438A",
  },

  blue: {
    backgroundColor: "#DDEAF8",
    borderColor: "#B8D0EA",
    textColor: "#3F5F8A",
  },
};

export const categoryColorMap: Record<string, keyof typeof categoryColors> = {
  "Coffee Shop": "green",
  Bakery: "green",
  Restaurant: "green",

  Florist: "pink",
  "Beauty Salon": "pink",
  "Clothing & Alterations": "pink",

  "Wellness Studio": "purple",
  "Design Studio": "purple",
  Photography: "purple",

  "Tech Repair": "blue",
  "Marketing Agency": "blue",
  "Business Services": "blue",
};
