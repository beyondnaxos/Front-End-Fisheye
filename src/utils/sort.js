class Sort {

    
    static init() {
    //    select all childs inside .media-container
        const mediaContainer = document.querySelector('.media-container');
        
       console.log(array);
    }


    constructor(array) {
        this.array = array;
    }

    sortBy(property) {
        if (property === "popularité") {
            this.array.sort((a, b) => {
                return b.likes - a.likes;
            }
            )
        } else if (property === "date") {
            this.array.sort((a, b) => {
                return b.date - a.date;
            }

            )
        } else if (property === "prix") {
            this.array.sort((a, b) => {
                return b.price - a.price;
            }

            )

        }
    }
    
    // init sort



  
}


export default Sort;