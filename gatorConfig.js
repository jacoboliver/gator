{
	frontend: true,
	backend: true,
	alligatorPort: 8080,
	cocodriePort: 8030,
	hbaseHost: '192.168.2.2',
	hbasePort: 9090,
	flushInt: 60000,
	intervals: [60,86400],
	debug: 1,
	categories:
			{
				bite:
					{
						table: 'bites'
					},
				snap:
					{
						table: 'snaps',
						intervals: [1]
					}
			}
}