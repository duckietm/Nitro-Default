import { RoomEngineObjectEvent, RoomObjectVariable, SecurityLevel } from '@nitrots/nitro-renderer';
import { GetSessionDataManager } from '../..';
import { GetRoomEngine } from './GetRoomEngine';

export function IsFurnitureSelectionDisabled(event: RoomEngineObjectEvent): boolean
{
    let result = false;

    const roomObject = GetRoomEngine().getRoomObject(event.roomId, event.objectId, event.category);

    if(roomObject)
    {
        const selectionDisabled = (roomObject.model.getValue<number>(RoomObjectVariable.FURNITURE_SELECTION_DISABLED) === 1);

        if(selectionDisabled)
        {
            result = true;

            if(GetSessionDataManager().securityLevel >= SecurityLevel.NONE) result = false;
        }
    }

    return result;
}