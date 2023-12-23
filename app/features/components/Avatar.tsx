import { createAvatar } from "@dicebear/core";
import * as Avaatars from '@dicebear/avataaars'
import Image from "next/image"
import { useId, useMemo } from "react";

const Avatar = ({ imageUrl }: { imageUrl: string }) => {
    

    return <Image className="w-10 h-10 rounded-full" src={imageUrl} alt="Rounded avatar" width={10} height={1} />
}
export default Avatar