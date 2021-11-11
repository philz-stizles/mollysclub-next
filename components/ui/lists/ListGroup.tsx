import React from 'react'

type Item = {
  id: number
  icon: string
  title: string
  subTitle: string
  active?: boolean
}

type ListGroupProps = {
  items: Item[]
  activeItem: number
  onClick?: (item: number) => void
}

const ListGroup = ({ items, activeItem, onClick }: ListGroupProps) => {
  return (
    <ul className="list-group">
      {items.map(item => {
        return (
          <ListGroupItem
            key={item.id}
            {...item}
            active={activeItem === item.id}
            onClick={() => onClick && onClick(item.id)}
          />
        )
      })}
      <style>
        {`
          .list-group {
            height: 100%;
            background-color: #fff;
            border: 1px solid rgba(230, 231, 239, 0.85);
            border-bottom-width: 0;
            box-shadow: 2px 2px 5px 0 rgb(60 70 83 / 4%);
            display: flex;
            flex-direction: row;
          }

          @media (min-width: 768px) {
            .list-group {
              flex-direction: column;
              border-bottom-width: 1px;
            }
          }
        `}
      </style>
    </ul>
  )
}

const ListGroupItem = ({
  id,
  icon,
  title,
  subTitle,
  active,
  onClick,
}: Item & { active: boolean; onClick: () => void }) => {
  return (
    <li className="list-group-item" onClick={onClick}>
      <a
        href="#paneProfile"
        data-toggle="tab"
        className="list-group-item__media"
      >
        <i className={icon}></i>
        <div className="list-group-item__media--body">
          <h6 className="title">{title}</h6>
          <span className="subtitle">{subTitle}</span>
        </div>
      </a>

      <style jsx>{`
        .list-group-item {
          position: relative;
          display: block;
          padding: 15px;
          border-color: rgba(230, 231, 239, 0.85);
          box-shadow: 2px 2px 5px 0 rgb(60 70 83 / 4%);
          margin: 0;
          border: 0;
          background-color: ${active ? '#f1f1fa' : '#fff'};
          border: 1px solid rgba(0, 0, 0, 0.125);
          width: 100%;
          text-align: inherit;
        }

        .list-group-item:first-child {
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        }

        .list-group-item:active {
          color: #373857;
        }

        .list-group-item:hover {
          background-color: #f1f1fa;
          box-shadow: none;
        }

        .list-group-item__media {
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        .list-group-item__media i {
          color: ${active ? '#5556fd' : '#06072d'};
          fill: rgba(85, 86, 253, 0.1);
          font-size: 24px;
          overflow: hidden;
          vertical-align: middle;
        }

        .list-group-item__media--body {
          flex: 1;
          margin-left: 15px;
          display: none;
        }

        .list-group-item__media--body .title {
          margin-bottom: 2px;
          color: ${active ? '#5556fd' : '#06072d'};
          font-size: 14px;
          font-weight: 600;
        }

        .list-group-item__media--body .subtitle {
          font-size: 12px;
          color: rgba(55, 56, 87, 0.6);
          display: none;
        }

        @media (min-width: 1200px) {
          .list-group-item__media--body .subtitle {
            display: block;
          }
        }

        @media (min-width: 768px) {
          .list-group-item {
            border-bottom: 1px solid rgba(230, 231, 239, 0.85);
          }

          .list-group-item__media {
            justify-content: flex-start;
          }

          .list-group-item__media--body {
            display: block;
          }
        }
      `}</style>
    </li>
  )
}

export default ListGroup
