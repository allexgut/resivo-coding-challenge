import Typography from '@mui/material/Typography';
import { Door } from '@/models/Door';
import { DetailPageContainer } from '@/ui/layout/DetailPageContainer';
import { DetailPageItem } from '@/ui/layout/DetailPageItem';
import { ConnectionStatus } from '@/models/ConnectionStatus';
import { getLocaleString } from '@/lib/dateTime';

interface DoorDetailProps {
  door: Door;
}

export function DoorDetail({ door }: DoorDetailProps) {
  const statusColor =
    door.connectionStatus === ConnectionStatus.Online
      ? 'success.main'
      : 'error.main';

  return (
    <DetailPageContainer>
      <DetailPageItem label="ID">
        <Typography>{door.id}</Typography>
      </DetailPageItem>
      <DetailPageItem label="Building">
        <Typography>{door.buildingName}</Typography>
      </DetailPageItem>
      <DetailPageItem label="Apartment">
        <Typography>{door.apartmentName}</Typography>
      </DetailPageItem>
      <DetailPageItem label="Connection type">
        <Typography>{door.connectionType}</Typography>
      </DetailPageItem>
      <DetailPageItem label="Last connection status update">
        <Typography>
          {getLocaleString(door.lastConnectionStatusUpdate)}
        </Typography>
      </DetailPageItem>
      <DetailPageItem label="Connection status">
        <Typography color={statusColor}>{door.connectionStatus}</Typography>
      </DetailPageItem>
    </DetailPageContainer>
  );
}
