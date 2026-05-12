interface AvatarProps {
    imageUrl: string;
    altText: string;
    size?: "sm" | "md" | "lg"; // The '?' makes this prop optional
}

export function Avatar({ imageUrl, altText, size = "md" }: AvatarProps) {
    const sizeClasses = {
        sm: "w-8 h-8",
        md: "w-12 h-12",
        lg: "w-20 h-20",
    };

    return (
        <img
            src={imageUrl}
            alt={altText}
            className={`${sizeClasses[size]} rounded-full object-cover border-2 border-gray-200`}
        />
    );
}
