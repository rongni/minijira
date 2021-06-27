import { useEffect, useState } from 'react';

export const SearchPanel = () => {
	return (
		<form>
			<div>
				<input
					type='text'
					value={param.name}
					onChange={(evt) =>
						setParam({
							...param,
							name: evt.target.value,
						})
					}
				/>
				<select
					value={param.personId}
					onChange={(evt = setParam({ ...param, personId: evt.target.value }))}
				>
					<option value={''}>manager</option>
					{users.map((user) => (
						<option value={user.id}>{user.name}</option>
					))}
				</select>
			</div>
		</form>
	);
};
