
const Items = (props) => {
 
  var valueColor
  if (props.directionimg == 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAATCAYAAACtHkzTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABzSURBVHgB7Y3BCYAwDEV/UwfqKDqEF+9O0bsIXtygbuAKXaiNaQulguDVgx8CIe8lAdqMs8Ek1YRukPgESzWSqlDDgeHLNIpMAxbrVYUBAzT3WQjqgI4uSSTQZLhZX9+lPsiFCNNhtTueUhY84SW/8B3hAoCAJFenVWQAAAAAAElFTkSuQmCC') {
    valueColor = '#006874'
  }
  else {
    valueColor = '#712E49'
  }

  var resultStyle = {
    width: '28%',
    height: 124,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  var subheadStyle = {
    fontFamily: 'Raleway',
    left: 0,
    fontSize: 26,
    fontWeight: 400,
    lineHeight: '20px'
  }

  var imgStyle = {
    backgroundColor: '#F4F5F6',
    borderRadius: '50%',
    width: 62,
    height: 62,
    padding: 20
    
  }

  var descriptionStyle = {
    fontFamily: 'Raleway',
    left: 0,
    fontSize: 16,
    fontWeight: 400
  }

  var directionStyle = {
    float: 'left'
  }

  var valueStyle = {
    fontFamily: 'Montserrat',
    fontSize: 17,
    fontWeight: 600,
    marginLeft: 12,
    color: valueColor
  }

  return(
    <div style={resultStyle}>
      <img src={props.img} style={imgStyle}/>
      <div className='resultsItems' style={{marginLeft: 10}}>
        <h2 style={subheadStyle}>{props.subhead}</h2>
        <h3 style={descriptionStyle}>{props.description}</h3>
        <div style={{top: '-12px', position: 'relative'}}>
          <img src={props.directionimg} style={directionStyle}/>
          <h4 style={valueStyle}>{props.value}</h4>
        </div>
      </div>
    </div>
  );
}

export default Items