var Modal =  React.createClass ({
	renderTechnologies: function(){
		return this.props.technologies.map(function(technology, i) {
			return (<li key={i}>{technology.name}</li>);
		});
	},
  render: function() {
    return (
    	<div>
	    	<div id="modal1" className="modal">
	    	<div className="center-align z-depth-1">
	    	<img className="responsive-img" src={this.props.image}/>
	    	</div>
		    <div className="modal-content">
		      <h4>{this.props.title}</h4>
		      <p>A bunch of tex ssst</p>
		    </div>
		    <ul>
		    	{this.renderTechnologies()}
		    </ul>
		    <div className="modal-footer">
		      <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
		    </div>
		  </div>
    	</div>
	  );
  }
});

