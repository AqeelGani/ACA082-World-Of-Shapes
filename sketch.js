var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite,
    Bodies = Matter.Bodies;

var engine = Engine.create(),
    world = engine.world;


var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 800,
        height: 600,
        wireframes: false,
        background: 'pink',
    }
});

Render.run(render);


var runner = Runner.create();
Runner.run(runner, engine);



// Create Stacks

var stack1 = Composites.stack(40, 60, 4, 4, 0, 0, function (x, y) {
    return Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: '#3DB2FF',
            strokeStyle: 'black',
            lineWidth: 2,
        }
    })
})

var stack2 = Composites.stack(150, 60, 4, 4, 0, 0, function (x, y) {
    return Bodies.circle(x, y, 10, {
        render: {
            fillStyle: '#AF33FF',
            strokeStyle: 'black',
            lineWidth: 2,
        }
    })
})

var stack3 = Composites.pyramid(230, 60, 11, 6, 0, 0, function (x, y) {
    return Bodies.polygon(x, y, 8, 10, {
        render: {
            fillStyle: '#FFBE33',
            strokeStyle: 'black',
            lineWidth: 2,
        }
    })
})

var stack4 = Composites.stack(450, 60, 4, 4, 0, 0, function (x, y) {
    return Bodies.trapezoid(x, y, 20, 20, 0.5, {
        render: {
            fillStyle: '#FF0000',
            strokeStyle: 'black',
            lineWidth: 2,
        }
    })
})

var stack5 = Composites.pyramid(550, 60, 11, 6, 0, 0, function (x, y) {
    return Bodies.polygon(x, y, 3, 10, {
        render: {
            fillStyle: '#BFFFA0',
            strokeStyle: 'black',
            lineWidth: 2,
        }
    })
})

// Create ground

var ground = Bodies.rectangle(750, 606, 1600, 50.5, { isStatic: true });

Composite.add(world, [ground, stack1, stack2, stack3, stack4, stack5]);


/* var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });

Composite.add(world, mouseConstraint);


render.mouse = mouse;
*/
