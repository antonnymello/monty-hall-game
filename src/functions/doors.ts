import DoorModel from '../model/door';

export function createDoors(
  quantity: number,
  doorHasGift: number
): DoorModel[] {
  return Array.from({ length: quantity }, (_, index) => {
    const number = index + 1;
    const hasGift = number === doorHasGift;
    return new DoorModel(number, hasGift);
  });
}

export function updateDoors(
  doors: DoorModel[],
  modifiedDoor: DoorModel
): DoorModel[] {
  return doors.map((actualDoor) => {
    const equalDoor = actualDoor.number === modifiedDoor.number;

    if (equalDoor) return modifiedDoor;
    else {
      return modifiedDoor.isOpen ? actualDoor : actualDoor.removeSelection();
    }
  });
}
