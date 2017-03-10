
var Portfolios = React.createClass({
	getInitialState: function() {
		return {
			urlForPortfolios: 'http://localhost:3000//portfolios/portfolios_indexer?per_page=3',
			urlForPortfoliosecond: 'http://localhost:3000//portfolios/portfolios_indexer?page=2&per_page=3',
			PortfoliosData: [],
			PortfoliosDatasecond: [],
			hideBtn: 'btn',
					};
	}, // getInitialState
	componentDidMount() {
		fetch(this.state.urlForPortfolios)
			.then(d => d.json())
			.then(d =>{this.setState({PortfoliosData: d })
				})
			}, // componentDidMount
	handleClick: function (){
		fetch(this.state.urlForPortfoliosecond)
			.then(d => d.json())
			.then(d =>{this.setState({PortfoliosDatasecond: d })
			var all = this.state.PortfoliosData.concat(this.state.PortfoliosDatasecond);
				this.setState({
						PortfoliosData: all,
						hideBtn: 'hide',
						urlForPortfolios: false,
						urlForPortfoliosecond: false,
						showModal: false,
				}); //setState
		})
	}, // handleClick
	getPortfolioData: function(id){
			fetch("http://localhost:3000//portfolios/" + id)
			.then(d => d.json())
			.then(d =>{this.setState({PortfolioData: d, showModal: true })
				$('.modal').modal();
				$('#modal1').modal('open');
				})
			}, // getPortfolioData
	renderPortfolios: function () {
	    return this.state.PortfoliosData.map(function(portfolio, i) {
	        return (
	                <div className="col s12 m6 l4" key={i}>
			          	<div className="card">
			         	   <div className="card-image">
			        		    <img src={portfolio.image_url}/>
			          	    <span className="card-title">{portfolio.title}</span>	
			          	    <a className="btn-floating halfway-fab waves-effect waves-light" onClick={()=>this.getPortfolioData(portfolio.id)}><i className="material-icons">open_in_new</i></a>
			         	   </div>
			         	   <div className="card-action">
			          	    <a href="#">This is a link</a>
			        	    </div>
			      	    </div>
			        </div>
	        );
	    }, this // <== this is necessary to call getPortfolioData function from inside the map iterator  
	    );
	}, // renderPortfolios
	render (){
		if (!this.state.PortfoliosData) return <p>Loading..</p>
		return (
			<div>
				{function(){
			        if (this.state.showModal) {
			          return <div><Modal
										            title={this.state.PortfolioData.title}
										            description={this.state.PortfolioData.description}
									               image={this.state.PortfolioData.image_url}
									               technologies={this.state.PortfolioData.technologies}
			              /></div>
			        }
			      }.call(this)}
				<div className="center-align">
						{this.renderPortfolios()}
						<div className="col s12 m12 l12">
							<button onClick={this.handleClick} className={this.state.hideBtn}>Load More</button>
						</div>
				</div>
			</div>

			); // return
	} // render
  });