const Contact = ({ contactData, checkedIds, onToggleContactFromList }) => {

  return (
    <tr>
      <td>
        <input type="checkbox" onChange={(e) => onToggleContactFromList(e, contactData.id)} checked={checkedIds.includes(contactData.id)} />
      </td>
      <td><i className="fa fa-trash-o" /></td>
      <td><i className="fa fa-pencil"></i></td>
      <td>{contactData.name}</td>
      <td>{contactData.phoneNumber}</td>
    </tr>
  )
}

export default Contact