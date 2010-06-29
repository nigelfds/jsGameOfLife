function Neighbourhood() {
    var neighbors = [];
    var aliveCount = 0;

    this.addNeighbors = function(nodes) {
        for (var i = 0; i < nodes.length; i++) { // refactor to foreach
            var node = nodes[i];
            neighbors.push(node);
            if (node.living) {
                aliveCount++;
            }
        }
    };

    this.getNeighbours = function () {
        return neighbors;
    };

    this.underpopulated = function () {
        return (aliveCount < 2)
    };

    this.overcrowded = function () {
        return (aliveCount > 3)
    };

    this.suitable = function () {
        return (aliveCount == 2 || aliveCount == 3);
    };

    this.energized = function () {
        return (aliveCount == 3);
    };

}
