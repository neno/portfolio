export const Tag = ({name}: {name: string}) => {
  return (
    <div className="border-secondary border px-4 rounded-[16px] text-secondary text-sm leading-[2]">
      {name}
    </div>
  )
}