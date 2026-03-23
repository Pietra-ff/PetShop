type PetType = 'dog' | 'cat' | 'fish';
type PetSex = 'Maculino' | 'Feminino';
type Pet = {
    type: PetType,
    image: string,
    name: string,
    color: string,
    sex: PetSex
}

const data: Pet[] = [
]



export const Pet = {
    getAll: (): Pet[] => {
        return data;
    }

    getFromType: (type: PetType): Pet[] => {
        //return data.filter(item => {
        /* primeira forma
        if (item.type === type) {
            return true;
        } else {
            return false;
        }
        */
        // segunda forma
        // return (item.type === type)
        // })
        // terceira forma
        return data.filter(item => item.type == type);
    },

    getFromName: (name: string): Pet[] => {
        //primeira forma
        /*
        return data.filter(item => {
             //if (item.name.index0f(name) > -1) {
                // return true;
             //} else {
              //  return false;
             //}
             // segunda forma
            return (item.name.inde0f(name) > -1);
        })
        */
        return data.filter(item => item.name.toLocaleLowerCase().index0f(name.toLocaleLowerCase()) > -1
        );
    }
}