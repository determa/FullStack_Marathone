class Building {
    constructor(floors, material, address) {
        this.floors = floors;
        this.material = material;
        this.address = address;
    }

    toString() {
        return [
            `Floors: ${this.floors}`,
            `Material: ${this.material}`,
            `Address: ${this.address}`,
            `Elevator: ${this.hasElevator}`,
            `Arc reactor capacity: ${this.arcCapacity}`,
            `Height: ${this.height}`,
            `Floor height: ${this.getFloorHeight()}`
        ].join('\n');
    }
};

class Tower extends Building {
    hasElevator;
    arcCapacity;
    height;
    constructor(floors, material, address) {
        super(floors, material, address);
    }

    getFloorHeight() {
        return this.height / this.floors;
    }
};