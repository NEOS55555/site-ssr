import React, {PureComponent, Fragment} from 'react';
import SiteItem from '@/commonComp/SiteItem'
// import DelModal from '@/commonComp/DelModal'
// import { delSite } from '@/store/actions'
import { Pagination } from 'antd'
import Empty from '@/commonComp/Empty'

import './Content.scss';

class Content extends PureComponent {
  render () {
  	// const { visible, confirmLoading } = this.state;
  	const {list=[], total, current, pageSize, onChange, onShowSizeChange, isSystem, collectClick} = this.props;
  	// console.log(current)
  	return (
		  <div className="site-wrapper">
		  	{/*<div className="max-container">*/}
					<div className="main-content">
						{
							list.length > 0 
							?	(
									<Fragment>
				  					<div className="site-container">
								  		{
								  			list.map(it => 
								  				<SiteItem 
								  					isSystem={isSystem} 
								  					key={it._id} 
								  					collectClick={collectClick}
								  					isCollected={it.isCollected}
								  					data={it} 
								  					// closeClick={() => {this.showModal({_id: it._id, status: it.status})}} 
								  					// closeClick={handleOk} 
								  				/>
								  			)
								  		}
								  	</div>
								  	<Pagination 
								  		total={total} current={current} pageSize={pageSize}
									  	showQuickJumper 
				              size="small" 
				              // showSizeChanger={false} 
									  	// pageSizeOptions={['5', '10', '15']}
									  	onChange={onChange} 
									  	onShowSizeChange={onShowSizeChange} 
									  	// showTotal={total => `共 ${total} 条数据`} 
								  	/>
							  	</Fragment>
							  )
							: <Empty />
						}
					</div>
		  	{/*</div>*/}
		
	  	</div>
	  )
  }
}

export default Content;
