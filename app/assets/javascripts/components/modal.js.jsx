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
	    	<div id="modal1" className="modal">
		    	<div className="center-align">
		    		<img className="responsive-img modalImage z-depth-1 " src={this.props.image}/>
		    		<a className="fa fa-arrow-left fa-3x modalAction modal-action modal-close" aria-hidden="true"></a>
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

