import {HeartIcon} from "@heroicons/react/20/solid";

interface LifeBarProps {
    numberOfLivesLeft: number;
}

const LifeBar = ({ numberOfLivesLeft }: LifeBarProps) => {
    const livesLeft = [];
    const livesLost = [];

    for (let i = 0; i < numberOfLivesLeft; i++) {
        livesLeft.push(<HeartIcon className="w-4 h-4 text-red-600" key={i} />);
    }

    for (let i = 0; i < 5 - numberOfLivesLeft; i++) {
        livesLost.push(<HeartIcon className="w-4 h-4 text-red-300" key={i} />);
    }

    return (
        <div className="w-36">
            <h2 className="text-2xl">Lives</h2>
            <div className="flex items-end">
                {livesLeft.map(icon => icon)}
                {livesLost.map(icon => icon)}
                <output className="text-sm ml-3">{numberOfLivesLeft}/5</output>
            </div>
        </div>
    );
}

export default LifeBar;
