var createDatabase = function() {
  //Define an array to hold the data and we populate it with some entries
  var data = [
    {
      player: "AAA",
      score: 300,
      id: 1
    },
    {
      player: "TipTop",
      score: 990,
      id: 2
    }
  ];

  //Define a mechanism to generate unique id. Every time a new element is added, it will be incremented.
  //We will start with the lenght of the current data + 1.
  var id = data.length + 1;

  //Create
  function create(entry) {
    //Add the id to the entry
    entry.id = id++;
    data.push(entry);

    console.log("************");
    console.log("This item has been created", entry);
    console.log("************");
  }

  //Retrieve
  function retrieveAll() {
    console.log("************");
    console.log("All data");
    console.log(data);
    console.log("************");
  }

  function retrieveBy(criterion, value) {
    let elementFound = data.find(
      function(entry) {
        return entry[this.criterion] === this.value;
      },
      { criterion, value }
    );

    console.log("************");
    console.log("This item matches the criterion", elementFound);
    console.log("************");
  }

  //Update
  function update(entry) {
    let elementUpdated = data.find(function(entry, index, array) {
      if (entry.id === this.id) {
        array[index].player = this.player;
        array[index].score = this.score;
        return true;
      }
      return;
    }, entry);

    console.log("************");
    console.log("This item has been updated", elementUpdated);
    console.log("************");
  }

  //Delete
  function deleteItem(id) {
    let elementDeleted = data.find(function(entry, index, array) {
      if (entry.id === Number(this)) {
        array.splice(index, 1);
        return true;
      }
      return;
    }, id);

    console.log("************");
    console.log("This item has been deleted", elementDeleted);
    console.log("************");
  }

  //The function return an object with the methods, so you can call them
  return {
    create,
    retrieveAll,
    retrieveBy,
    update,
    deleteItem
  };
};

var db = createDatabase();

/**
 * Now you can use :
 * - db.create({ player: 'name of the player', score: 100 }) to create an entry
 * - db.retrieveAll() to get all the entries
 * - db.retrieveBy({ criterion: 'player', value: 'search name' }) to select the first item that matches the criterion
 * - db.update({ id: 1, player: 'new name', score: 500 }) to update an objet matching the entry.id
 * - db.delete(id) to remove the entry with the matching id
 */
