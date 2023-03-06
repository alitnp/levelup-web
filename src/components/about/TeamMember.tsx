import Image from "next/image";
import { FC } from "react";

interface ITeamMember {
	imageUrl: string;
	name: string;
	position: string;
}

const TeamMember: FC<ITeamMember> = ({
	imageUrl,
	name,
	position,
}) => {
	return (
		<div className="flex flex-col items-center">
			<div className="relative mb-2 overflow-hidden rounded-lg">
				<Image
					src={imageUrl}
					width={400}
					height={400}
					alt={name + " " + position}
					style={{ objectFit: "cover" }}
				/>
			</div>
			<span className="text-lg font-bold">{name}</span>
			<span>{position}</span>
		</div>
	);
};

export default TeamMember;
