// requires neighborhood.js to be loaded

var ALIVE = true;
var DEAD = false;

function Node(startingState) {

    var neighbourhood = new Neighbourhood();
    var that = this;
    this.living = startingState;    

    function shouldProduceDeadNode() {
        var test = neighbourhood.underpopulated(); 
        return (
                (this.living && neighbourhood.underpopulated()) ||
                (this.living && neighbourhood.overcrowded())
                );
    }

    function shouldProduceLiveNode() {
        return (
                (this.living && neighbourhood.suitable()) ||
                (!this.living && neighbourhood.energized())
                );
    }

    function newNodeAs(state) {
        var offSpring = new Node(state);
        offSpring.addNeighbors(neighbourhood.getNeighbours());
        return offSpring;
    }    

    this.addNeighbors = function(nodes) {
        neighbourhood.addNeighbors(nodes);
    };


    this.reproduce = function() {
        if (shouldProduceDeadNode()) {
            return newNodeAs(DEAD);
        }

        if (shouldProduceLiveNode()) {
            return newNodeAs(ALIVE);
        }
        return newNodeAs(this.living); //produce an unchanged clone.
    };

}


