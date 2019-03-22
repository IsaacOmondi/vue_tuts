export const fruitMixin = {
    data() {
        return {
          fruits: ["Apples", "Bananas", "Grapes", "Mangoes", "Melons"],
          filterText: ""
        };
      },
      computed: {
        filteredFruits() {
          return this.fruits.filter(element => {
            return element.match(this.filterText);
          });
        }
      }
};