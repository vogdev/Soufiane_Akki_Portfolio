var Modal =  React.createClass ({
	renderTechnologies: function(){
		return this.props.technologies.map(function(technology, i) {
			return (
				<li key={i} className="t-image">
				 <img className="responsive-img" src={technology.image_url}/>
				 <p>{technology.name}</p>
				</li>
				);
		});
	},
  render: function() {
    return (
    	<div>
	    	<div id="modal1" className="modal" data="modal">
		    	<div className="center-align">
		    	<div className="close-container"> <i className=" modalAction modal-action modal-close fa fa-times" aria-hidden="true"></i>
		    	</div>
		    		<img className="responsive-img modalImage z-depth-1 " src={this.props.image}/>
		    	</div>
			    <div className="modal-content">
			      <h4 className="title">{this.props.title}</h4>
			      <div>
			      <p className="lead">description :</p>
			      <p>{this.props.description}</p>
			      	
			      </div>
			    	<p className="lead">Technologies used in this project :</p>
				    <ul className="center-align">
				    	{this.renderTechnologies()}
				    </ul>
			    </div>
		  </div>
    	</div>
	  );
  }
});

