interface BadgeProps {
  role: string;
  isAdmin?: boolean;
}

export function Badge({role, isAdmin=false}: BadgeProps) {

    return(
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${isAdmin ? 'bg-purple-100 text-purple-800' : 'bg-gray-200 text-gray-700'}`}>
            {role}
        </span>
    )
}