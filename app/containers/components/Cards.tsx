type Props = {
    children?: string | JSX.Element | JSX.Element[] | null
}

export default function Cards({children}: Props) {
    return (
      <div className="cards panel">
        {children}
      </div>
    );
  }
  