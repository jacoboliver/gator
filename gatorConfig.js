{
	port: 8080,
	hbaseHost: '192.168.2.2',
	hbasePort: 9090,
	flushInt: 60000,
	frontend: true,
	backend: true,
	intervals: [60,86400],
	debug: 1,
	categories:
			{
				plays:
					{
						table: 'plays'
					},
				clicks:
					{
						table: 'clicks',
						intervals: [1]
					}
			}
}