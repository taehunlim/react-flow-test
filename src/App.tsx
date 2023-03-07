import { useCallback } from 'react';
import ReactFlow, {
   Background,
   useNodesState,
   addEdge,
   useEdgesState,
   ConnectionLineType,
   BackgroundVariant,
} from 'reactflow';

import { initialNodes, initialEdges } from './nodes';

import 'reactflow/dist/style.css';

const connectionLineStyle = { stroke: '#ffff' };
const defaultViewport = { x: 0, y: 0, zoom: 1.5 };
const defaultEdgeOptions = {
   animated: true,
   type: 'smoothstep', // 직각
};

function App() {
   const [node, setNode, onNodesChange] = useNodesState(initialNodes);
   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
   const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
   console.log(123);
   console.log(edges[0]);

   return (
      <div style={{ height: '100vh', backgroundColor: 'lightBlue' }}>
         <ReactFlow
            nodes={node}
            edges={edges}
            connectionLineStyle={connectionLineStyle}
            connectionLineType={ConnectionLineType.Bezier}
            fitView
            snapToGrid
            snapGrid={[50, 50]}
            onNodesChange={onNodesChange}
            //  onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            defaultViewport={defaultViewport}
            defaultEdgeOptions={defaultEdgeOptions}
         >
            <Background gap={[50, 50]} variant={BackgroundVariant.Lines} />
         </ReactFlow>
      </div>
   );
}

export default App;
