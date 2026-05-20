import Image, { StaticImageData }  from 'next/image'
import Link from 'next/link'
import { CircleArrowRight } from 'lucide-react';
import styles from './clickableCard.module.css';

interface ClickableCardProps {
    image: StaticImageData;
    text: string,
    url: string,
}

const ClickableCard = ({image, text, url}: ClickableCardProps) => {
    return (
        <Link href={url} target="_blank" rel="noopener noreferrer" className="group relative block w-80 h-48 overflow-hidden rounded-xl p-4">
            <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-110">
                <Image
                    src={image}
                    alt="Background"
                    fill
                    className="object-cover blur-sm" // Apply blur here
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="relative h-full flex items-center justify-center p-6 text-white">
                <span className={styles.clickableCardText}>{text}</span>
                <CircleArrowRight className="h-6 w-6 text-white" />
            </div>
        </Link>
    )
}

export default ClickableCard;
