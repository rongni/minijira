import { SearchPanel } from './search-panel';
import { List } from './list';

export const ProjectListListScreen = () => {
	const [param, setParam] = useState({
		name: '',
		personId: '',
	});
	const [users, setUsers] = useState([]);
	const [list, setList] = useState([]);

	useEffect(() => {
		fetch('').then(async (response) => {
			if (response.ok) {
				setList(await response.json());
			}
		});
	}, [param]);
	return (
		<div>
			<SearchPanel />
			<List />
		</div>
	);
};
